export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-900">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 border-t-4 border-slate-50 border-solid rounded-full animate-spin"></div>
        <p className="text-lg text-slate-50">Loading, please wait...</p>
      </div>
    </div>
  );
}
