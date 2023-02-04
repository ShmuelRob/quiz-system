    import { Link } from "react-router-dom";

interface headerProps {
  username?: string;
}

function Header(props: headerProps) {
  const username = props.username ?? "unknown person";
  return (
    <div>
      <header>
        welcome {username}
        <ul>
          <li>
            <Link to='/'>home</Link>
          </li>
          <li>
            <Link to='/'>logout??</Link>
          </li>
          <li>
            <Link to='/questions'>questions</Link>
          </li>
          <li>
            <Link to='/questions/add'>add question</Link>
          </li>
          <li>
            <Link to='/exams'>exams</Link>
          </li>
          <li>
            <Link to='/exams/add'>add exam</Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
