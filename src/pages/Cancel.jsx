export default function Cancel() {
  return (
    <div className="max-w-2xl mx-auto p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Payment Cancelled</h1>
      <p className="text-gray-600 mb-4">
        Your checkout was cancelled — no charge was made.
      </p>
      <a
        href="/"
        className="text-blue-600 hover:underline font-medium"
      >
        Return to home
      </a>
    </div>
  );
}