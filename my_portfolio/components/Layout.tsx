import Header from "./Header";
import Footer from "./Footer";
type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <div>
        레이아웃
        <div>{children}</div>
      </div>
      <Footer />
    </>
  );
}
