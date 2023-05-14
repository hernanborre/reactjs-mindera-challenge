import React from 'react'

export const ColumnToggle = (props) => {
  const onToggle = (e) => {
    const columnName = e.target.name;
    const isChecked = e.target.checked;
    props.onColumnToggle(columnName, isChecked)
  }

  return (
    <div className="toggle-columns">
      { 
        Object.keys(props.toggles).map((toggle, index) => {
          return ( 
          <div key={index}>
            <label htmlFor={toggle}>
              {toggle}
            </label>
            <input
            id={toggle}
            name={toggle}
            type="checkbox"
            checked={props.toggles[toggle]}
            onChange={onToggle}
          />
          </div>)
        })
      }
    </div>
  );
}
