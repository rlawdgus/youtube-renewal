import { useSelector } from "react-redux";

import { useComments } from "../hooks/useComments";

const Comments = () => {
    const { id } = useSelector((state) => state.video);

    const [comments] = useComments(id);

    console.log(comments);

    return <></>;
};

export default Comments;
