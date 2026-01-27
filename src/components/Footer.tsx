import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t-4 border-black">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 서비스 링크 */}
          <div>
            <h4 className="font-bold text-black mb-6 uppercase tracking-wide text-sm">
              SERVICE
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/about"
                  className="text-black hover:text-swiss-accent transition-colors font-medium"
                >
                  서비스 소개
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-black hover:text-swiss-accent transition-colors font-medium"
                >
                  문의하기
                </Link>
              </li>
              <li>
                <Link
                  to="/report?blog-url=https%3A%2F%2Fhappysisyphe.tistory.com%2F"
                  className="text-black hover:text-swiss-accent transition-colors font-medium"
                >
                  개발자의 블로그 보러가기
                </Link>
              </li>
            </ul>
          </div>

          {/* 정책 및 약관 */}
          <div>
            <h4 className="font-bold text-black mb-6 uppercase tracking-wide text-sm">
              POLICY
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-black hover:text-swiss-accent transition-colors font-medium"
                >
                  개인정보처리방침
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-service"
                  className="text-black hover:text-swiss-accent transition-colors font-medium"
                >
                  이용약관
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* 하단 저작권 정보 */}
        <div className="border-t-2 border-black mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-black text-sm font-medium mb-2 md:mb-0">
            © {currentYear} BLOG ANALYZER. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
