import React from "react";
import Divider from "../ui/divider";
import SocialShare from "../ui/social-share";
import WORKSHOPS from "../data/workshops";
import WorkshopList from "../ui/workshop-list";

function Workshops() {
  return (
    <>
      <SocialShare title="Workshops" />
      <Divider>
        <h1>Workshops</h1>
      </Divider>

      <p>
        These workshops are FREE for every ticket holder of JSConf Budapest
        2024.
      </p>

      <p>
        The workshops have limited seats, so be sure to get your ticket before
        they fill up! We'll open them slowly, so everyone has a chance to pick a
        workshop they like.
      </p>
      <p>
        You will be able to register to a workshop using the ID on your ticket.
        If will be possible to switch the workshop you've picked later, if there
        is a free seat available on another workshop.
      </p>

      <WorkshopList workshops={WORKSHOPS.filter((w) => w.published)} />
    </>
  );
}

export default Workshops;
