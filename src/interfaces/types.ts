/** Describes which side the directory pane is on. */
export type DirectoryPaneSide = "left" | "right";

/** Describes directory navigation directions. */
export type DirectoryDirection = "up" | "down";

/** The type of a directory item. */
export type ItemType = "file" | "folder";

/** A terminal socket message type. */
export type SocketMessageType = "resize";

/** The action type requested of the clipboard. */
export type ClipboardAction = "copy" | "cut";

/** The status update type given when updating the status component. */
export type StatusUpdate = "notification" | "itemCount" | "chosenCount";

/** The direction in which to scroll a scroll area. */
export type ScrollToDirection = "top" | "bottom";

/** The type of the directory list column. */
export type ColumnType = "name" | "size" | "lastModified" | "createdOn";

/** A mapping of column types to their respective sizes. */
export type MappedColumnSizes = {
    [P in ColumnType]: number
};
