export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-neutral-900 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="font-bold text-lg">FitPick</h3>
            <p className="text-sm text-gray-600">내게 꼭 맞는 패션을 고른다</p>
          </div>
          
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h4 className="font-semibold mb-2">고객 지원</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>고객센터</li>
                <li>배송 안내</li>
                <li>교환 및 환불</li>
              </ul>
            </div>
            
            <div className="text-center md:text-left">
              <h4 className="font-semibold mb-2">회사 정보</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>회사 소개</li>
                <li>이용약관</li>
                <li>개인정보처리방침</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-6 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} FitPick. All rights reserved.
        </div>
      </div>
    </footer>
  );
} 