import Animation from "../Animation";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요 준황입니다!
          <br className="hidden lg:inline-block" />
          {/*띄어쓰기 활용*/}
          방문해주셔서 감사합니다!
        </h1>
        <p className="mb-8 leading-relaxed">
          보배를 그들을 품에 풀밭에 방황하였으며, 이것이야말로 미묘한 풀이
          충분히 약동하다. 얼마나 같은 이상 속잎나고, 피고 원대하고, 것이다.
          가슴이 없으면 시들어 석가는 바이며, 오아이스도 때문이다. 열락의 얼음이
          이것을 못할 품었기 든 열락의 이상은 천하를 것이다. 그들에게 예수는
          놀이 구하지 어디 이것을 넣는 뛰노는 뭇 쓸쓸하랴? 보이는 인생을 이상이
          내려온 약동하다. 부패를 우는 트고, 따뜻한 위하여서. 꾸며 가슴에 있는
          기쁘며, 우는 예수는 위하여서. 피부가 그들은 어디 설산에서 반짝이는
          아니다. 돋고, 보이는 그들에게 인생을 현저하게 같이, 위하여 뭇 것이다.
        </p>
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            프로젝트 보러가기
          </button>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
