import avatar from '../assets/portfolio_im01.png';


export default function Header() {
  return (
    <header className="text-center mb-20">
      <h1 className="text-5xl font-bold">Fukuda Jonosuke</h1>
      <div className="my-5">
        <img src={avatar} alt="avatar" className="mx-auto w-24 h-24" />
      </div>
    </header>
  );
}
