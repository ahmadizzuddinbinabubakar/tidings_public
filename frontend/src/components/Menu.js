import Link from 'next/link';

//todo: menu get from db
const Menu = () => (
  <ul className="menu">
    <li>
      <Link href="/world">World</Link>
    </li>
    <li>
      <Link href="/business">Business</Link>
    </li>
    <li>
      <Link href="/science">Science</Link>
    </li>
    <li>
      <Link href="/technology">Technology</Link>
    </li>
    <li>
      <Link href="/culture">Culture</Link>
    </li>
    <li>
      <Link href="/lifestyle">Lifestyle</Link>
    </li>
    <li>
      <Link href="/sports">Sports</Link>
    </li>
    <style>{`
      .menu {
        // margin: 5px 0 0;
        padding: 0;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
      }
      .menu li a {
        font-size: 2.5vh;
        color: #999999;
        font-weight: 300;
        // padding: 5px 2px;
        margin: 0 1vh;
        text-decoration: none;
      }
      .menu li a:hover {
        padding-bottom: 3px;
        border-bottom: 2px solid #C0C0C0;
      }
    //   @media (max-width: 600px) {
    //     .menu {
    //       display: block;
    //       margin-top: 20px;
    //     }
    //     .menu li {
    //       display: inline-block;
    //     }
    //     .menu li a {
    //       font-size: 2.5vh;
    //     }
    //   }
    // `}
    </style>
  </ul>
);

export default Menu;
