package com.openhack.dev.service;

import java.io.BufferedInputStream;
import java.io.InputStream;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.openhack.dev.domain.JsonSchemaData;
import com.openhack.dev.repository.JsonSchemaRepository;

@Service
public class ExcelToJsonService {

	private static final Logger logger = LoggerFactory.getLogger(ExcelToJsonService.class);

	@Autowired
	JsonSchemaRepository jsonSchemaRepository;

	public String startConversioToJson(MultipartFile multipartFile) {
		String finalFileDataAsString = "";
		finalFileDataAsString = createJSONAndTextFileFromExcel(multipartFile);
		return finalFileDataAsString;
	}

	/*
	 * Read data from an excel file and output each sheet data to a json file and a
	 * text file. filePath : The excel file store path.
	 */
	public String createJSONAndTextFileFromExcel(MultipartFile multipartFile) {
		String finalFileDataAsString = "";
		try {
			/* First need to open the file. */
			InputStream fInputStream = new BufferedInputStream(multipartFile.getInputStream());
			Workbook excelWorkBook = WorkbookFactory.create(fInputStream);
			// Get all excel sheet count.
			int totalSheetNumber = excelWorkBook.getNumberOfSheets();

			// Loop in all excel sheet.
			for (int i = 0; i < totalSheetNumber; i++) {
				// Get current sheet.
				Sheet sheet = excelWorkBook.getSheetAt(i);

				// Get sheet name.
				String sheetName = sheet.getSheetName();

				if (sheetName != null && sheetName.length() > 0) {
					// Get current sheet data in a list table.
					List<List<String>> sheetDataTable = getSheetDataList(sheet);

					// Generate JSON format of above sheet data and write to a JSON file.
					finalFileDataAsString = getJSONStringFromList(sheetDataTable);

				}
			}
			// Close excel work book object.
			excelWorkBook.close();
		} catch (Exception ex) {
			logger.info(ex.getMessage());
		}
		return finalFileDataAsString;
	}

	/*
	 * Return sheet data in a two dimensional list. Each element in the outer list
	 * is represent a row, each element in the inner list represent a column. The
	 * first row is the column name row.
	 */
	public List<List<String>> getSheetDataList(Sheet sheet) {
		List<List<String>> ret = new ArrayList<List<String>>();

		// Get the first and last sheet row number.
		int firstRowNum = sheet.getFirstRowNum();
		int lastRowNum = sheet.getLastRowNum();

		if (lastRowNum > 0) {
			// Loop in sheet rows.
			for (int i = firstRowNum; i < lastRowNum + 1; i++) {
				// Get current row object.
				Row row = sheet.getRow(i);

				// Get first and last cell number.
				int firstCellNum = row.getFirstCellNum();
				int lastCellNum = row.getLastCellNum();

				// Create a String list to save column data in a row.
				List<String> rowDataList = new ArrayList<String>();

				// Loop in the row cells.
				for (int j = firstCellNum; j < lastCellNum; j++) {
					// Get current cell.
					Cell cell = row.getCell(j);

					// Get cell type.
					int cellType = cell.getCellType().getCode();

					if (cellType == CellType.NUMERIC.getCode()) {
						double numberValue = cell.getNumericCellValue();

						// BigDecimal is used to avoid double value is counted use Scientific counting
						// method.
						// For example the original double variable value is 12345678, but jdk
						// translated the value to 1.2345678E7.
						String stringCellValue = BigDecimal.valueOf(numberValue).toPlainString();

						rowDataList.add(stringCellValue);

					} else if (cellType == CellType.STRING.getCode()) {
						String cellValue = cell.getStringCellValue();
						rowDataList.add(cellValue);
					} else if (cellType == CellType.BOOLEAN.getCode()) {
						boolean numberValue = cell.getBooleanCellValue();

						String stringCellValue = String.valueOf(numberValue);

						rowDataList.add(stringCellValue);

					} else if (cellType == CellType.BLANK.getCode()) {
						rowDataList.add("");
					}
				}

				// Add current row data list in the return list.
				ret.add(rowDataList);
			}
		}
		return ret;
	}

	/* Return a JSON string from the string list. */
	public String getJSONStringFromList(List<List<String>> dataTable) {
		String ret = "";
		JSONArray jsonArray = new JSONArray();
		if (dataTable != null) {
			int rowCount = dataTable.size();

			if (rowCount > 1) {
				// Create a JSONObject to store table data.
				JSONObject tableJsonObject = new JSONObject();

				// The first row is the header row, store each column name.
				List<String> headerRow = dataTable.get(0);

				int columnCount = headerRow.size();

				// Loop in the row data list.
				for (int i = 1; i < rowCount; i++) {
					// Get current row data.
					List<String> dataRow = dataTable.get(i);

					// Create a JSONObject object to store row data.
					JSONObject rowJsonObject = new JSONObject();

					for (int j = 0; j < columnCount; j++) {
						String columnName = headerRow.get(j);
						String columnValue = dataRow.get(j);

						rowJsonObject.put(columnName, columnValue);
					}

					// tableJsonObject.put("Row " + i, rowJsonObject);
					jsonArray.add(rowJsonObject);
				}

				// Return string format data of JSONObject object.
				ret = jsonArray.toString();

			}
		}
		return ret;
	}

	public List<JsonSchemaData> saveJsonSchemaData(List<JsonSchemaData> jsonSchemaDataList) {
		List<JsonSchemaData> jsonSchemaDataLists = null;
		jsonSchemaRepository.deleteAll();
		jsonSchemaDataLists = jsonSchemaRepository.saveAll(jsonSchemaDataList);

		return jsonSchemaDataLists;
	}

}
