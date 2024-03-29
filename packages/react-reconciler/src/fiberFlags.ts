export type Flags = number;

export const NoFlags = 0b0000001;
export const Placement = 0b0000010;
export const Update = 0b0000100;
export const ChildDeletion = 0b00010000;

export const MutationMask = Placement | Update | ChildDeletion;
