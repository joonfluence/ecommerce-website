import { Product } from "@/types/product";

export const products: Product[] = [
  // Men's products
  {
    id: "mens-1",
    name: "베이직 옥스포드 셔츠",
    price: 39000,
    description: "모든 룩에 어울리는 클래식한 옥스포드 셔츠입니다. 고급 면 소재로 제작되어 편안하면서도 세련된 스타일을 연출할 수 있습니다.",
    category: "셔츠",
    gender: "men",
    image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?q=80&w=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?q=80&w=600&auto=format&fit=crop",
    ]
  },
  {
    id: "mens-2",
    name: "슬림핏 치노 팬츠",
    price: 45000,
    description: "편안함과 스타일을 모두 갖춘 슬림핏 치노 팬츠입니다. 면과 스판 혼방 소재로 활동성이 좋으며, 다양한 상의와 매치하기 쉽습니다.",
    category: "팬츠",
    gender: "men",
    image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?q=80&w=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=600&auto=format&fit=crop",
    ]
  },
  {
    id: "mens-3",
    name: "오버사이즈 그래픽 티셔츠",
    price: 32000,
    description: "트렌디한 오버사이즈 핏의 그래픽 티셔츠입니다. 100% 코튼 소재로 제작되어 착용감이 좋습니다.",
    category: "티셔츠",
    gender: "men",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600&auto=format&fit=crop",
    ]
  },
  {
    id: "mens-4",
    name: "기본 맨투맨 스웨트셔츠",
    price: 42000,
    description: "편안한 착용감의 기본 맨투맨 스웨트셔츠입니다. 캐주얼한 룩에 최적화된 아이템입니다.",
    category: "스웨트셔츠",
    gender: "men",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?q=80&w=600&auto=format&fit=crop",
    ]
  },

  // Women's products
  {
    id: "womens-1",
    name: "플로럴 미디 원피스",
    price: 59000,
    description: "여성스러운 실루엣의 플로럴 패턴 원피스입니다. 가볍고 시원한 소재로 봄과 여름에 입기 좋습니다.",
    category: "원피스",
    gender: "women",
    image: "https://images.unsplash.com/photo-1612722432474-b971cdcea546?q=80&w=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1612722432474-b971cdcea546?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600&auto=format&fit=crop",
    ]
  },
  {
    id: "womens-2",
    name: "하이웨이스트 와이드 팬츠",
    price: 48000,
    description: "편안한 착용감과 세련된 실루엣의 와이드 팬츠입니다. 다양한 상의와 쉽게 매치할 수 있습니다.",
    category: "팬츠",
    gender: "women",
    image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?q=80&w=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590159983013-d637b239b244?q=80&w=600&auto=format&fit=crop",
    ]
  },
  {
    id: "womens-3",
    name: "슬림핏 트렌치 코트",
    price: 89000,
    description: "클래식한 디자인의 트렌치 코트입니다. 봄과 가을에 활용하기 좋은 필수 아이템입니다.",
    category: "자켓/코트",
    gender: "women",
    image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?q=80&w=600&auto=format&fit=crop",
    ]
  },

  // Unisex products
  {
    id: "unisex-1",
    name: "베이직 후드티",
    price: 48000,
    description: "남녀 공용으로 착용 가능한 베이직한 디자인의 후드티입니다. 캐주얼한 스타일링에 적합합니다.",
    category: "후드/맨투맨",
    gender: "unisex",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=600&auto=format&fit=crop",
    ]
  },
  {
    id: "unisex-2",
    name: "오버핏 데님 재킷",
    price: 76000,
    description: "남녀 모두 착용 가능한 오버핏 데님 재킷입니다. 다양한 스타일링에 활용하기 좋습니다.",
    category: "자켓/코트",
    gender: "unisex",
    image: "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?q=80&w=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?q=80&w=600&auto=format&fit=crop",
    ]
  },
  {
    id: "unisex-3",
    name: "릴렉스 핏 조거 팬츠",
    price: 45000,
    description: "편안한 착용감의 조거 팬츠입니다. 캐주얼한 스타일링에 적합한 남녀공용 아이템입니다.",
    category: "팬츠",
    gender: "unisex",
    image: "https://images.unsplash.com/photo-1626497764746-6dc36546b388?q=80&w=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1626497764746-6dc36546b388?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552331704-0c9e8ba63391?q=80&w=600&auto=format&fit=crop",
    ]
  }
]; 