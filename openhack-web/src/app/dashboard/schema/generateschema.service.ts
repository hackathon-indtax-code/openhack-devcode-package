import { Injectable } from '@angular/core';
import _ from 'lodash';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenerateschemaService {
  readonly apiUrl: string = 'http://localhost:8080';
  primitiveTypes = ['boolean', 'integer', 'number', 'string'];
  schemaVersion = 'http://json-schema.org/draft-07/schema#';
  embedded = true;
  constructor(private http: HttpClient) {}

  generateSchema(excelToJsonData): any {
    const jsonSchemaVldList = [];
    let groupedSchema: any;
    groupedSchema = _.chain(excelToJsonData)
      .reject(value => value.Ignore)
      .groupBy(value => value.Name)
      .value();

    groupedSchema = _.chain(groupedSchema)
      .mapValues((value, key) => ({
        $schema: this.schemaVersion,
        title: key,
        description: key,
        type: 'object',
        properties: this.processProperties(value, groupedSchema, this.embedded),
        required: this.processRequiredFields(value)
      }))
      .value();
    if (groupedSchema) {
      _.forEach(groupedSchema, (value, key) => {
        jsonSchemaVldList.push({
          entityName: key,
          jsonSchema: JSON.stringify(value),
          mainSchema: false
        });
      });
    }
    return jsonSchemaVldList;
  }

  processProperties(value, modelInfo, embedded) {
    const properties = _.chain(value)
      .groupBy(value1 => value1.Property)
      .mapValues(value2 => {
        if (embedded && _.lowerCase(value2[0].ParentType) === 'object') {
          return this.processChildProperties(value2, modelInfo, embedded);
        }
        return {
          description: value2[0].Description,
          type: value2[0].ParentType
            ? _.lowerCase(value2[0].ParentType) === 'array'
              ? 'array'
              : undefined
            : value2[0].Type,
          items: this.processArrayItems(value2[0], modelInfo, embedded),
          $ref:
            !embedded && _.lowerCase(value2[0].ParentType) === 'object'
              ? `${_.kebabCase(value2[0].Type)}.json#`
              : undefined,
          enum: value2[0].EnumList
            ? _.chain(value2[0].EnumList)
                .trim('[')
                .trimEnd(']')
                .split(', ')
                .value()
            : undefined,
          default: value2[0].Default,
          format: value2[0].Format,
          pattern: value2[0].Pattern,
          maximum: value2[0].Maximum,
          minimum: value2[0].Minimum,
          maxLength: value2[0].MaxLength,
          minLength: value2[0].MinLength,
          maxItems: value2[0].MaxItems,
          minItems: value2[0].MinItems
        };
      })
      .value();
    return _.isEmpty(properties) ? undefined : properties;
  }

  processChildProperties(value, modelInfo, embedded) {
    const type = 'object';
    const properties = this.processProperties(
      modelInfo[value[0].Type],
      modelInfo,
      embedded
    );

    if (embedded) {
      return {
        type,
        properties,
        required: this.processRequiredFields(modelInfo[value[0].Type])
      };
    } else {
      return {
        type,
        properties
      };
    }
  }

  processArrayItems(value, modelInfo, embedded) {
    if (_.lowerCase(value.ParentType) === 'array') {
      if (_.includes(this.primitiveTypes, _.lowerCase(value.Type))) {
        return {
          type: value.Type
        };
      }
      if (embedded) {
        return {
          type: 'object',
          properties: this.processProperties(
            modelInfo[value.Type],
            modelInfo,
            embedded
          ),
          required: this.processRequiredFields(modelInfo[value.Type])
        };
      }
      return { $ref: `${_.kebabCase(value.Type)}.json#` };
    }
    return undefined;
  }

  processRequiredFields(value) {
    return _.chain(value)
      .filter(value1 => _.lowerCase(value1.Required) === 'true')
      .map(value2 => value2.Property)
      .value();
  }

  getMainSchema() {
    return this.http.get(this.apiUrl + '/files/getMainSchema');
  }
}
