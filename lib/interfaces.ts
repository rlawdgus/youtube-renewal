import { SvgIconProps } from "@material-ui/core";
import { SvgIconComponent } from "@material-ui/icons";

export interface Video {
    id: string;
    title: string;
    thumbnail: string;
    duration: string;
    channelId: string;
    channelTitle: string;
    viewCount: string;
    publishedAt: string;
}

export interface InputAttribute {
    className?: string;
    type?: string;
    value: string;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    readOnly?: boolean;
}

export interface VideoCategory {
    id: string;
    name: string;
    icon: SvgIconComponent;
}
