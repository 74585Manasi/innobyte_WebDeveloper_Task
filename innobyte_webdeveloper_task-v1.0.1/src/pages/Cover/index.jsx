import React from "react";
import { Helmet } from "react-helmet";
import { Img } from "../../components";

export default function CoverPage() {
  return (
    <>
      <Helmet>
        <title>innobyte_webDeveloper_task</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700">
        <Img src="images/img_preview_1.png" alt="previewone_one" className="h-[840px] w-full md:h-auto object-cover" />
      </div>
    </>
  );
}
