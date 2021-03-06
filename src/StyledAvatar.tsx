import React, { FC } from "react";
import Avatar from "@material-ui/core/Avatar";
import styled from "styled-components/macro";

const OutterCircle = styled.div`
  width: 110px;
  height: 110px;
  background-color: hsl(211, 100%, 89%);
  border-radius: 50%;
  box-shadow: 0px 0px 8px hsl(211, 100%, 89%);
`;
const InnerCircle = styled.div`
  margin: 5px;
  width: 100px;
  height: 100px;
  background-color: hsl(211, 100%, 89%);
  display: inline-block;
  border-radius: 50%;
`;
type AvatarProps = {
  color: string;
};
const StyledAvatar: FC<AvatarProps> = ({ color }) => {
  return (
    <OutterCircle>
      <InnerCircle>
        <Avatar
          style={{
            margin: 10,
            width: 80,
            height: 80,
            backgroundColor: "white",
            display: "inline-block",
          }}
          alt="Something"
          src={`https://crystallizer.s3.eu-west-2.amazonaws.com/${color}.svg`}
        />
      </InnerCircle>
    </OutterCircle>
  );
};
export default StyledAvatar;
