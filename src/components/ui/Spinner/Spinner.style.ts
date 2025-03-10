import styled, { keyframes } from "styled-components";

const spin3D = keyframes`
  from {
    transform: rotate3d(0.5, 0.5, 0.5, 360deg);
  }
  to {
    transform: rotate3d(0, 0, 0, 0deg);
  }
`;

const coreMixin = `
    width: 100%;
    height: 100%;
    border-radius: 50%;
    `;

const borderMixin = `
    position: absolute;
    width: 150px;
    height: 150px;
    padding: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
`;

const LeoCore1 = styled.div`
	${coreMixin}
	background-color: #37474faa;
`;

const LeoCore2 = styled.div`
	${coreMixin}
	background-color: #1d2630aa;
`;

const LeoBorder1 = styled.div`
	${borderMixin}
	background: rgb(63,249,220);
	background: linear-gradient(0deg, rgba(63, 249, 220, 0.1) 33%, rgba(63, 249, 220, 1) 100%);
	animation: ${spin3D} 1.8s linear 0s infinite;
`;

const LeoBorder2 = styled.div`
	${borderMixin}
	background: rgb(251, 91, 83);
	background: linear-gradient(0deg, rgba(251, 91, 83, 0.1) 33%, rgba(251, 91, 83, 1) 100%);
	animation: ${spin3D} 2.2s linear 0s infinite;
`;

const SpinnerBox = styled.div`
	width: 300px;
	height: 300px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: transparent;
`;

export { LeoCore1, LeoCore2, LeoBorder1, LeoBorder2, SpinnerBox };
