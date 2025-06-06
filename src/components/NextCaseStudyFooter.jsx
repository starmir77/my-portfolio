import { Link } from "react-router-dom";

export default function NextCaseStudyFooter({ nextTitle, nextPath }) {
  return (
    <div className="next-case-footer">
      <p className="footer-label"></p>
      <Link to={nextPath} className="footer-link">
        {nextTitle} 
      </Link>
    </div>
  );
}
