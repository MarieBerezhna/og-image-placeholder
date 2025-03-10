import styled from "styled-components";

export const StyledPreviewContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;
	min-height: 50vh;
	gap: 1rem;
`;

export const StyledSideForm = styled.div`
	position: absolute !important;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	top: 0;
	right: 0;
	gap: 1rem;
`;
