import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 서비스 링크 */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">서비스</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  서비스 소개
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  문의하기
                </Link>
              </li>
              <li>
                <Link
                  to="/report?blog-url=https%3A%2F%2Fhappysisyphe.tistory.com%2F"
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  개발자의 블로그 보러가기
                </Link>
              </li>
            </ul>
          </div>

          {/* 정책 및 약관 */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">정책</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  개인정보처리방침
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-service"
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  이용약관
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* 하단 저작권 정보 */}
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-2 md:mb-0">
            © {currentYear} 블로그 성향 분석기. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
