import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white flex items-center justify-center">
      <div className="text-center p-8 max-w-md">
        <div className="text-red-500 mb-4 mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          분석 중 오류가 발생했습니다
        </h2>
        <div className="flex gap-4 justify-center">
          <Link
            to="/"
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
          >
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  )
}


