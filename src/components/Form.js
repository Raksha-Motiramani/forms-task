import React, { useState } from 'react';
import Row from './Row';

const Form = () => {
  const [rows, setRows] = useState([{ name: '', type: 'object', required: false, fields: [] }]);
  const [fieldTypes, setFieldTypes] = useState(['object', 'string', 'integer', 'boolean']);

  const handleAddRow = () => {
    setRows([...rows, { name: '', type: 'object', required: false, fields: [] }]);
  };

  const handleDeleteRow = (index) => {
    const newRows = [...rows];
    newRows.splice(index, 1);
    setRows(newRows);
  };

  const handleFieldChange = (index, key, value) => {
    const newRows = [...rows];
    newRows[index][key] = value;
    setRows(newRows);
  };

  const handleSave = () => {
    console.log('Save button clicked');
    //console.log(rows);
    console.log(rows.map((row) => {
      return {
        name: row.name,
        type: row.type,
        required: row.required,
        fields: row.fields.map((field) => {
          return {
            name: field.name,
            type: field.type,
            required: field.required,
            fields: field.fields
          }
        })
      }
    }));

  };


  return (
    <div>
      <div className='add-btn'>
      <button onClick={handleAddRow}>Add Row</button>
      </div>
      {rows.map((row, index) => (
        <Row
          key={index}
          index={index}
          row={row}
          fieldTypes={fieldTypes}
          handleFieldChange={handleFieldChange}
          handleDeleteRow={handleDeleteRow}
        />
      ))}
      <div className='save-btn'>
      <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default Form;

