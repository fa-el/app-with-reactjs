import React, {useEffect, useState} from 'react';
export default function TextInput ({name='', label='', type = 'text', id='', onChange=()=>{}, value="", className='', errMsg=null, ...props}) {

    const [classname, setclassname] = useState('shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md text-gray-700')
    useEffect(() => {
        if(errMsg){ 
            setclassname('block w-full border-red-300 text-red-900 placeholder-red-500 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md ' + className);
        }else{
            setclassname('shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md text-gray-700 ' + className);
        }
    },[errMsg]);

    const handleChange = (e) => {
        onChange(e);
    }
    return <div className="mb-3 w-full">
        <label htmlFor="email" className="block text-sm font-medium">
        {label}
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
            <input
                type={type}
                name={name}
                className={classname}
                id={id}
                aria-invalid={errMsg}
                aria-describedby={`${id}-error`}
                onChange={handleChange}
                value={value}
                {...props}
            />
        </div>

        {errMsg && <p className="mt-2 text-sm text-red-400 text-right" id={`${id}-error`}>
        {errMsg}
        </p>}
    </div>
}

