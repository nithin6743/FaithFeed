export default function App() {
  return <div>
    <Header />
  </div>
}

function Header(){
  return <div className="header"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/Background.jpg)`,
        backgroundSize: "cover", // fills the screen
        backgroundPosition: "center", // centers the image
        backgroundRepeat: "no-repeat", // no tiling
        height: "100vh", // full viewport height
        width: "100vw", // full viewport width
        overflow: "hidden", // avoids scrollbars
      }}>
        <button className="LogoName">FaithFeed</button>
        <button className="Date">01/10/2025</button>
        <button className="Login">Login</button>
      </div>
}
