import React, { FC, ReactComponentElement } from "react";
import { Col, Row } from "react-bootstrap";
import MainContainer from "../../UI/MainContainer";
import cl from "./index.module.scss";
import useResponsive from "../../../hooks/useResponsive";
import { motion } from "framer-motion";

interface Props {
  UsedForm: ReactComponentElement<FC>;
  rightSection: ReactComponentElement<any>;
}

const secSectionAnimate = {
  hidden: {
    x: -50,
    y: 100,
  },
  visible: {
    x: -10,
    y: 10,
    transition: {
      duration: 1.5,
      delay: 0.5,
    },
  },
};
const formAnime = {
  hidden: {
    rotateY: 80,
  },
  visible: {
    rotateY: 0,
    transition: {
      duration: 1.5,
      delay: 1,
    },
  },
};

const MainForm: React.FC<Props> = ({ UsedForm, rightSection }) => {
  const mode = useResponsive();
  return (
    <MainContainer>
      <Row>
        <Col sm={12}>
          <Row>
            <motion.div
              className={`col md-6 lg-6 sm-6 xs-6 p-0 m-0 ${cl.formParent}`}
              variants={formAnime}
              initial="hidden"
              animate="visible"
            >
              {UsedForm}
            </motion.div>
            {mode !== "phone" && mode !== "tablet" && (
              <motion.div
                className="col md-6 lg-6 sm-6 xs-6 p-0 m-0"
                variants={secSectionAnimate}
                initial="hidden"
                animate="visible"
              >
                {rightSection}
              </motion.div>
            )}
          </Row>
        </Col>
      </Row>
    </MainContainer>
  );
};

export default MainForm;
