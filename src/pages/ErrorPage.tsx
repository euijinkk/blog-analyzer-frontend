import { Link } from "react-router-dom";
import { AlertCircle } from "lucide-react";

export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-white pattern-grid-subtle flex items-center justify-center">
      <div className="text-center p-12 border-4 border-swiss-accent bg-white max-w-md">
        <div className="text-swiss-accent mb-6 mx-auto">
          <AlertCircle size={64} className="mx-auto" />
        </div>
        <h2 className="text-3xl font-black text-black uppercase tracking-tight mb-4">
          ERROR
        </h2>
        <p className="text-black mb-8">분석 중 오류가 발생했습니다</p>
        <Link to="/" className="swiss-btn inline-block">
          GO HOME
        </Link>
      </div>
    </div>
  );
}
