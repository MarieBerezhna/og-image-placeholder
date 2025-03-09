import styled from "styled-components";

export const StyledSwatch = styled.div`
	width: 28px;
	height: 28px;
	border-radius: 8px;
	border: 3px solid #fff;
	box-shadow:
		0 0 0 1px rgba(0, 0, 0, 0.1),
		inset 0 0 0 1px rgba(0, 0, 0, 0.1);
	cursor: pointer;
`;

export const StyledPopover = styled.div`
	position: absolute;
	top: calc(100% + 2px);
	left: 0;
	border-radius: 9px;
	box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
`;
