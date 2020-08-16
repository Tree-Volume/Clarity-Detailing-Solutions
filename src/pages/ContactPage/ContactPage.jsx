import React from "react";
import { TextIconCombo, LinkIcon } from "components/";
import "./ContactPage.scss";

const ContactPage = () => (
  <>
    <p>hello</p>
    <div className="card p-6 m-12 flex text-left flex-col">
      <div className="px-3">
        <h3 className="title">Catch us Here Too!</h3>

        <TextIconCombo
          text="123 Main Street, NY 10030"
          textClassName="text"
          iconClassName="textIcon"
          icon="map-marker"
        />
        <TextIconCombo
          text="905-739-2859"
          textClassName="text"
          iconClassName="textIcon"
          icon="phone"
        />
        <TextIconCombo
          text="contact@claritydetailingsolutions.com"
          textClassName="text"
          iconClassName="textIcon"
          icon="envelope"
        />
        <hr className="w-full my-5 linebreak" />
      </div>
      <div className="inline-flex flex-wrap justify-center">
        <LinkIcon
          className="icon"
          icon={["fab", "instagram"]}
          url="placeholder"
        />
        <LinkIcon
          className="icon"
          icon={["fab", "facebook"]}
          url="placeholder"
        />
        <LinkIcon
          className="icon"
          icon={["fab", "twitter"]}
          url="placeholder"
        />
        <LinkIcon
          className="icon"
          icon={["fab", "youtube"]}
          url="placeholder"
        />
        <LinkIcon
          className="icon"
          icon={["fab", "snapchat"]}
          url="placeholder"
        />
      </div>
    </div>
  </>
);

export default ContactPage;
