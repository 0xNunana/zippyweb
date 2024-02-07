'use client'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex justify-center items-center min-h-screen">
        <div>
            <p className="text-5xl font-semibold py-5">OOPS ! </p>
        <h2>{error.message}</h2>
      <button onClick={() => reset()} className="bg-zippygreen p-7 rounded-md">Try again</button>
        </div>
  
    </div>
  )
}