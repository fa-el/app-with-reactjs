export default function TextInput ({name='', label='', type = 'text', id='', className='', isValid=true, requiredMessage=null, ...props}) {
    function ErrorInput () {
        return <input
            type={type}
            name={name}
            className="block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
            id={id}
            aria-invalid="true"
            aria-describedby={`${id}-error`}
            {...props}
        />
    }
    function DefaultInput () {
        return <input
            type={type}
            name={name}
            id={id}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            {...props}
        />
    }
    return <div className="mb-3">
        <label htmlFor="email" className="block text-sm font-medium">
        {label}
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
            {isValid ? <DefaultInput/> : <ErrorInput/>}
        </div>

        {!isValid && requiredMessage && <p className="mt-2 text-sm text-red-600" id={`${id}-error`}>
        Your password must be less than 4 characters.
        </p>}
    </div>
}

