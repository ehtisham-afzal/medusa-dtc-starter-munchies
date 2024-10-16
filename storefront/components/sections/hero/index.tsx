import {SanityImage} from "@/components/shared/sanity-image";
import Video from "@/components/shared/video";
import {stegaClean} from "@sanity/client/stega";

import type {ModularPageSection} from "../types";

import LargeHero from "./large-hero";
import SimpleHero from "./simple-hero";

export default function Hero(props: ModularPageSection<"section.hero">) {
  const mediaType = stegaClean(props.mediaType);
  const video = props.video;
  const largeImage = stegaClean(props.largeImage);
  return (
    <section
      {...props.rootHtmlAttributes}
      className="mx-auto w-full max-w-max-screen px-m py-xs lg:px-xl lg:py-xs"
    >
      {mediaType === "image" && <SimpleHero {...props} />}
      {mediaType === "video" && video && (
        <LargeHero props={props}>
          <div className="aspect-[16/9] min-h-[590px] w-full overflow-hidden rounded-lg object-cover object-center">
            <Video
              aspectRatio="16/9"
              fetchPriority="high"
              poster={video.poster}
              videoUrl={video.url}
            />
          </div>
        </LargeHero>
      )}
      {mediaType === "largeImage" && largeImage && (
        <LargeHero props={props}>
          <SanityImage
            className="aspect-[16/9] min-h-[590px] w-full rounded-lg object-cover object-center"
            data={largeImage}
            fetchPriority="high"
          />
        </LargeHero>
      )}
    </section>
  );
}
