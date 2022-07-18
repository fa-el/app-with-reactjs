export default function Button ({children,type='button', className='', ...props}) {
    return <button
    type={type}
    className={`w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-50 ${className}`}
    {...props}
  >
    {children}
  </button>
}