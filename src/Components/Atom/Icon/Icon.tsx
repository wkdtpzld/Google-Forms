import React from "react";
import {SvgXml} from "react-native-svg";
import {XmlProps} from "react-native-svg/src/xml";

const Icon = ({...props}:XmlProps) => <SvgXml width="100%" height="100%" {...props} />
export default Icon;