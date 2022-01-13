import React from 'react'
export default function FormInput({
    name,
    type,
    placeholder,
    onChange,
    className,
    value,
    error,
    children,
    label,
    prepend,
    ...props
}){

    return(
        <React.Fragment>

    <div className="my-1">
      {/* <label className="customLabel" htmlFor={label}>{label}</label> */}
      <div className="input-group d-flex flex-column ">
        <div className="input-group-prepend">
          <div className="customLabel">{prepend}</div>
        </div>
        <input
            id={name}
            name={name}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            className={className}
            style={error && {border: 'solid 1px red'}}
            />
            { error && <p className="text-danger m-3 p-2">{ error }</p>}
      </div>
    </div>
            
        </React.Fragment>
    )
}