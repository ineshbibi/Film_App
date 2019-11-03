import React from "react";
import "./PrevEpisode.css";
import Moment from "react-moment";
function PrevEpisode({ prevEp }) {
  return (
    <div>
      <div className="prev_ep_title">
        <span className="prev_ep_Span">Previous Episode</span>
      </div>
      <div className="prev_ep_info">
        <span className="prev_ep_titre_span">{prevEp.name}</span>
        {prevEp.summary !== "" && (
          <div
            dangerouslySetInnerHTML={{ __html: prevEp.summary }}
            className="Summary"
          />
        )}
        {prevEp.summary === "" && (
          <p className="Summary">
            Pas de description disponible en ce moment ....
          </p>
        )}
        <span className="prev_ep_Season">Season :</span>
        <span className="prev_ep_Season_rep">{prevEp.season}</span>
        <br />
        <span className="prev_ep_Season">Number :</span>
        <span className="prev_ep_Season_rep">{prevEp.number}</span>
        <br />
        <span className="prev_ep_Season">Time :</span>
        <span className="prev_ep_Season_rep">
          {prevEp.airtime} -
          <Moment format="YYYY/MM/DD">{prevEp.airstamp}</Moment>
        </span>
      </div>
    </div>
  );
}

export default PrevEpisode;
