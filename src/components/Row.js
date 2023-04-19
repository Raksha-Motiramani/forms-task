import React from 'react';

const Row = ({ index, row, fieldTypes, handleFieldChange, handleDeleteRow }) => {
  const handleAddField = () => {
    handleFieldChange(index, 'fields', [...row.fields, { name: '', type: 'string', required: false }]);
  };

  const handleDeleteField = (fieldIndex) => {
    const newFields = [...row.fields];
    newFields.splice(fieldIndex, 1);
    handleFieldChange(index, 'fields', newFields);
  };

  return (
    <div className='row'>
      <label>
        Field Name:
        <input
          type="text"
          value={row.name}
          onChange={(e) => handleFieldChange(index, 'name', e.target.value)}
        />
      </label>
      <label>
        Field Type:
        <select
          value={row.type}
          onChange={(e) => handleFieldChange(index, 'type', e.target.value)}
        >
          {fieldTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </label>
      <label>
        Required:
        <input
          type="checkbox"
          checked={row.required}
          onChange={(e) => handleFieldChange(index, 'required', e.target.checked)}
        />
      </label>
      <button onClick={() => handleDeleteRow(index)}>Delete</button>
      {row.type === 'object' && (
        <div style={{ marginLeft: 20 }}>
        <div>
          {row.fields.map((field, fieldIndex) => (
            <div key={fieldIndex}>
              <input
                type="text"
                value={field.name}
                onChange={(e) => {
                  const newFields = [...row.fields];
                  newFields[fieldIndex].name = e.target.value;
                  handleFieldChange(index, 'fields', newFields);
                }}
              />
              <select
                value={field.type}
                onChange={(e) => {
                  const newFields = [...row.fields];
                  newFields[fieldIndex].type = e.target.value;
                  handleFieldChange(index, 'fields', newFields);
                }}
              >
                {fieldTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <label>
                Required:
                <input
                  type="checkbox"
                  checked={field.required}
                  onChange={(e) => {
                    const newFields = [...row.fields];
                    newFields[fieldIndex].required = e.target.checked;
                    handleFieldChange(index, 'fields', newFields);
                  }}
                />
              </label>
              <button onClick={() => handleDeleteField(fieldIndex)}>Delete</button>
            </div>
          ))}
          <button onClick={handleAddField}>Add Field</button>
        </div>
        </div>
      )}
    </div>
  );
};

export default Row;

  
