import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItrschemaService {
  constructor() {}

  getITR2Schema() {
    const itr2Schema = {
      definitions: {},
      $schema: 'http://json-schema.org/draft-07/schema#',
      $id: 'http://example.com/root.json',
      type: 'object',
      title: 'The Root Schema',
      required: ['ITR2'],
      properties: {
        ITR2: {
          $id: '#/properties/ITR2',
          type: 'object',
          title: 'The Itr2 Schema',
          required: ['CreationInfo', 'Form_ITR2', 'PartA_GEN1', 'PartB-TI'],
          properties: {
            CreationInfo: {
              $id: '#/properties/ITR2/properties/CreationInfo',
              type: 'object',
              title: 'The Creationinfo Schema',
              required: ['XMLCreationDate'],
              properties: {
                XMLCreationDate: {
                  $id:
                    '#/properties/ITR2/properties/CreationInfo/properties/XMLCreationDate',
                  type: 'string',
                  minLength: 10,
                  maxLength: 10,
                  title: 'The Xmlcreationdate Schema',
                  default: '',
                  examples: ['2008-07-15'],
                  pattern: '[0-9]{4}-[0-9]{2}-[0-9]{2}'
                }
              }
            },
            Form_ITR2: {
              $id: '#/properties/ITR2/properties/Form_ITR2',
              type: 'object',
              title: 'The Form_itr2 Schema',
              required: ['FormName', 'Description', 'AssessmentYear'],
              properties: {
                FormName: {
                  $id:
                    '#/properties/ITR2/properties/Form_ITR2/properties/FormName',
                  type: 'string',
                  minLength: 5,
                  maxLength: 5,
                  title: 'The Formname Schema',
                  default: '',
                  examples: ['ITR-2'],
                  pattern: 'ITR-[1-9]{1}'
                },
                Description: {
                  $id:
                    '#/properties/ITR2/properties/Form_ITR2/properties/Description',
                  type: 'string',
                  minLength: 10,
                  maxLength: 100,
                  title: 'The Description Schema',
                  default: '',
                  examples: [
                    'For Indls and  HUFs not having Income from Business or Profession'
                  ],
                  pattern: '^(.*)$'
                },
                AssessmentYear: {
                  $id:
                    '#/properties/ITR2/properties/Form_ITR2/properties/AssessmentYear',
                  type: 'integer',
                  minimum: 2015,
                  maximum: 2019,
                  title: 'The Assessmentyear Schema',
                  default: 0,
                  examples: [2008]
                }
              }
            },
            PartA_GEN1: {
              $id: '#/properties/ITR2/properties/PartA_GEN1',
              type: 'object',
              title: 'The Parta_gen1 Schema',
              required: ['PersonalInfo', 'FilingStatus'],
              properties: {
                PersonalInfo: {
                  $id:
                    '#/properties/ITR2/properties/PartA_GEN1/properties/PersonalInfo',
                  type: 'object',
                  title: 'The Personalinfo Schema',
                  required: ['AssesseeName', 'PAN', 'Address', 'DOB', 'Gender'],
                  properties: {
                    AssesseeName: {
                      $id:
                        '#/properties/ITR2/properties/PartA_GEN1/properties/PersonalInfo/properties/AssesseeName',
                      type: 'object',
                      title: 'The Assesseename Schema',
                      required: ['FirstName'],
                      properties: {
                        FirstName: {
                          $id:
                            '#/properties/ITR2/properties/PartA_GEN1/properties/PersonalInfo/properties/AssesseeName/properties/FirstName',
                          type: 'string',
                          minLength: 2,
                          maxLength: 25,
                          title: 'The Firstname Schema',
                          default: '',
                          examples: ['AAAAAA'],
                          pattern: '^(.*)$'
                        }
                      }
                    },
                    PAN: {
                      $id:
                        '#/properties/ITR2/properties/PartA_GEN1/properties/PersonalInfo/properties/PAN',
                      type: 'string',
                      minLength: 10,
                      maxLength: 10,
                      title: 'The Pan Schema',
                      default: '',
                      examples: ['AAAPA1111A'],
                      pattern: '[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}'
                    },
                    Address: {
                      $id:
                        '#/properties/ITR2/properties/PartA_GEN1/properties/PersonalInfo/properties/Address',
                      type: 'object',
                      title: 'The Address Schema',
                      required: ['StateCode', 'PinCode'],
                      properties: {
                        StateCode: {
                          $id:
                            '#/properties/ITR2/properties/PartA_GEN1/properties/PersonalInfo/properties/Address/properties/StateCode',
                          type: 'integer',
                          minimum: 0,
                          maximum: 99,
                          title: 'The Statecode Schema',
                          default: 0,
                          examples: [2]
                        },
                        PinCode: {
                          $id:
                            '#/properties/ITR2/properties/PartA_GEN1/properties/PersonalInfo/properties/Address/properties/PinCode',
                          type: 'integer',
                          minimum: 100000,
                          maximum: 999999,
                          title: 'The Pincode Schema',
                          default: 0,
                          examples: [111111]
                        }
                      }
                    },
                    DOB: {
                      $id:
                        '#/properties/ITR2/properties/PartA_GEN1/properties/PersonalInfo/properties/DOB',
                      type: 'string',
                      minLength: 10,
                      maxLength: 10,
                      title: 'The Dob Schema',
                      default: '',
                      examples: ['1900-01-01'],
                      pattern: '[0-9]{4}-[0-9]{2}-[0-9]{2}'
                    },
                    Gender: {
                      $id:
                        '#/properties/ITR2/properties/PartA_GEN1/properties/PersonalInfo/properties/Gender',
                      type: 'string',
                      minLength: 1,
                      maxLength: 1,
                      title: 'The Gender Schema',
                      default: '',
                      examples: ['F'],
                      pattern: '[MFO]{1}'
                    }
                  }
                },
                FilingStatus: {
                  $id:
                    '#/properties/ITR2/properties/PartA_GEN1/properties/FilingStatus',
                  type: 'object',
                  title: 'The Filingstatus Schema',
                  required: ['FilingDateTime'],
                  properties: {
                    FilingDateTime: {
                      $id:
                        '#/properties/ITR2/properties/PartA_GEN1/properties/FilingStatus/properties/FilingDateTime',
                      type: 'string',
                      minLength: 25,
                      maxLength: 25,
                      title: 'The Filingdatetime Schema',
                      default: '',
                      examples: [''],
                      pattern: '^(.*)$'
                    }
                  }
                }
              }
            },
            'PartB-TI': {
              $id: '#/properties/ITR2/properties/PartB-TI',
              type: 'object',
              title: 'The Partb-ti Schema',
              required: ['IncFromOS', 'TotalTI'],
              properties: {
                IncFromOS: {
                  $id:
                    '#/properties/ITR2/properties/PartB-TI/properties/IncFromOS',
                  type: 'object',
                  title: 'The Incfromos Schema',
                  required: ['IncFromOS1', 'IncFromOS2'],
                  properties: {
                    IncFromOS1: {
                      $id:
                        '#/properties/ITR2/properties/PartB-TI/properties/IncFromOS/properties/IncFromOS1',
                      type: 'integer',
                      minimum: 0,
                      maximum: 10000,
                      title: 'The Incfromos1 Schema',
                      default: 0,
                      examples: [1234]
                    },
                    IncFromOS2: {
                      $id:
                        '#/properties/ITR2/properties/PartB-TI/properties/IncFromOS/properties/IncFromOS2',
                      type: 'integer',
                      minimum: 0,
                      maximum: 10000,
                      title: 'The Incfromos2 Schema',
                      default: 0,
                      examples: [2345]
                    }
                  }
                },
                TotalTI: {
                  $id:
                    '#/properties/ITR2/properties/PartB-TI/properties/TotalTI',
                  type: 'integer',
                  minimum: 0,
                  maximum: 10000,
                  title: 'The Totalti Schema',
                  default: 0,
                  examples: [44354]
                }
              }
            }
          }
        }
      }
    };
    return itr2Schema;
  }

  getITR3Schema() {
    const itr3Schema = {
      definitions: {},
      $schema: 'http://json-schema.org/draft-07/schema#',
      $id: 'http://example.com/root.json',
      type: 'object',
      title: 'The Root Schema',
      required: ['ITR3'],
      properties: {
        ITR3: {
          $id: '#/properties/ITR3',
          type: 'object',
          title: 'The Itr3 Schema',
          required: ['CreationInfo', 'Form_ITR3', 'PartA_GEN1'],
          properties: {
            CreationInfo: {
              $id: '#/properties/ITR3/properties/CreationInfo',
              type: 'object',
              title: 'The Creationinfo Schema',
              required: ['XMLCreationDate'],
              properties: {
                XMLCreationDate: {
                  $id:
                    '#/properties/ITR3/properties/CreationInfo/properties/XMLCreationDate',
                  type: 'string',
                  title: 'The Xmlcreationdate Schema',
                  default: '',
                  examples: ['2008-07-15'],
                  pattern: '^(.*)$'
                }
              }
            },
            Form_ITR3: {
              $id: '#/properties/ITR3/properties/Form_ITR3',
              type: 'object',
              title: 'The Form_itr3 Schema',
              required: ['FormName', 'Description', 'AssessmentYear'],
              properties: {
                FormName: {
                  $id:
                    '#/properties/ITR3/properties/Form_ITR3/properties/FormName',
                  type: 'string',
                  minLength: 5,
                  maxLength: 5,
                  title: 'The Formname Schema',
                  default: '',
                  examples: ['ITR-2'],
                  pattern: 'ITR-[1-9]{1}'
                },
                Description: {
                  $id:
                    '#/properties/ITR3/properties/Form_ITR3/properties/Description',
                  type: 'string',
                  title: 'The Description Schema',
                  default: '',
                  examples: [
                    'For Indls and  HUFs not having Income from Business or Profession'
                  ],
                  pattern: '^(.*)$'
                },
                AssessmentYear: {
                  $id:
                    '#/properties/ITR3/properties/Form_ITR3/properties/AssessmentYear',
                  type: 'integer',
                  title: 'The Assessmentyear Schema',
                  default: 0,
                  examples: [2016]
                }
              }
            },
            PartA_GEN1: {
              $id: '#/properties/ITR3/properties/PartA_GEN1',
              type: 'object',
              title: 'The Parta_gen1 Schema',
              required: ['PersonalInfo', 'FilingStatus'],
              properties: {
                PersonalInfo: {
                  $id:
                    '#/properties/ITR3/properties/PartA_GEN1/properties/PersonalInfo',
                  type: 'object',
                  title: 'The Personalinfo Schema',
                  required: ['AssesseeName', 'PAN', 'Address', 'DOB', 'Gender'],
                  properties: {
                    AssesseeName: {
                      $id:
                        '#/properties/ITR3/properties/PartA_GEN1/properties/PersonalInfo/properties/AssesseeName',
                      type: 'object',
                      title: 'The Assesseename Schema',
                      required: ['FirstName'],
                      properties: {
                        FirstName: {
                          $id:
                            '#/properties/ITR3/properties/PartA_GEN1/properties/PersonalInfo/properties/AssesseeName/properties/FirstName',
                          type: 'string',
                          title: 'The Firstname Schema',
                          default: '',
                          examples: ['AAAAAA'],
                          pattern: '^(.*)$'
                        }
                      }
                    },
                    PAN: {
                      $id:
                        '#/properties/ITR3/properties/PartA_GEN1/properties/PersonalInfo/properties/PAN',
                      type: 'string',
                      minLength: 10,
                      maxLength: 10,
                      title: 'The Pan Schema',
                      default: '',
                      examples: ['AAAPA1111A'],
                      pattern: '[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}'
                    },
                    Address: {
                      $id:
                        '#/properties/ITR3/properties/PartA_GEN1/properties/PersonalInfo/properties/Address',
                      type: 'object',
                      title: 'The Address Schema',
                      required: ['StateCode', 'PinCode'],
                      properties: {
                        StateCode: {
                          $id:
                            '#/properties/ITR3/properties/PartA_GEN1/properties/PersonalInfo/properties/Address/properties/StateCode',
                          type: 'integer',
                          title: 'The Statecode Schema',
                          default: 0,
                          examples: [2]
                        },
                        PinCode: {
                          $id:
                            '#/properties/ITR3/properties/PartA_GEN1/properties/PersonalInfo/properties/Address/properties/PinCode',
                          type: 'integer',
                          title: 'The Pincode Schema',
                          default: 0,
                          examples: [111111]
                        }
                      }
                    },
                    DOB: {
                      $id:
                        '#/properties/ITR3/properties/PartA_GEN1/properties/PersonalInfo/properties/DOB',
                      type: 'string',
                      title: 'The Dob Schema',
                      default: '',
                      examples: ['1900-01-01'],
                      pattern: '^(.*)$'
                    },
                    Gender: {
                      $id:
                        '#/properties/ITR3/properties/PartA_GEN1/properties/PersonalInfo/properties/Gender',
                      type: 'string',
                      minLength: 1,
                      maxLength: 1,
                      title: 'The Gender Schema',
                      default: '',
                      examples: ['F'],
                      pattern: '[MFO]{1}'
                    }
                  }
                },
                FilingStatus: {
                  $id:
                    '#/properties/ITR3/properties/PartA_GEN1/properties/FilingStatus',
                  type: 'object',
                  title: 'The Filingstatus Schema',
                  required: ['FilingDateTime'],
                  properties: {
                    FilingDateTime: {
                      $id:
                        '#/properties/ITR3/properties/PartA_GEN1/properties/FilingStatus/properties/FilingDateTime',
                      type: 'string',
                      title: 'The Filingdatetime Schema',
                      default: '',
                      examples: ['2018-11-13T20:20:39+00:00'],
                      pattern: '^(.*)$'
                    }
                  }
                }
              }
            }
          }
        }
      }
    };
    return itr3Schema;
  }
}
