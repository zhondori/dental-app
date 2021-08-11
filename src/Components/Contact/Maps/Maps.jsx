import React from "react";
import {
  YMaps,
  Map,
  Placemark,
  ZoomControl,
  RulerControl,
  TypeSelector,
} from "react-yandex-maps";
import "./Maps.scss";

const Maps = () => {
  return (
    <div className="maps">
      <YMaps>
        <Map defaultState={{ center: [39.73981451738915, 64.17112225413442], zoom: 9 }}>
          <Placemark geometry={[39.73981451738915, 64.17112225413442]} />
          <RulerControl options={{ float: "right" }} />
          <TypeSelector options={{ float: "right" }} />
          <ZoomControl options={{ float: "top" }} />
        </Map>
      </YMaps>
    </div>
  );
};

export default Maps;
