import React, { useCallback, useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";

import useClickOutside from "../../hooks/useClickOutside";
import Flex from "../ui/Flex";
import { StyledPopover, StyledSwatch } from "./PopoverPicker.style";

type PopoverPickerProps = {
	color: string;
	onChange: (color: string) => void;
};
const PopoverPicker = ({ color, onChange }: PopoverPickerProps) => {
	const popover = useRef(null);
	const [isOpen, toggle] = useState(false);

	const close = useCallback(() => toggle(false), []);
	useClickOutside({ ref: popover, handler: close });

	return (
		<Flex>
			<StyledSwatch style={{ backgroundColor: color }} onClick={() => toggle(true)} />

			{isOpen && (
				<StyledPopover ref={popover}>
					<HexColorPicker color={color} onChange={onChange} />
				</StyledPopover>
			)}
		</Flex>
	);
};

export default PopoverPicker;
