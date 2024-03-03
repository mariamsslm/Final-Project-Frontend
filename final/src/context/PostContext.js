import { createContext, useContext, useState } from "react";

const PostContext = createContext()

export const PostProvider = ({ children }) => {
    const [isSection, setIsSection] = useState(true)
    const [isDrawing, setIsDrawing] = useState(false)
    const [isPhotograph, setIsPhotograph] = useState(false)
    const [isWriting, setIsWriting] = useState(false)
    const [isOld ,setIsOld] = useState(false)

    const handleSwitchSectionClick = () => {
        setIsSection(true)
        setIsDrawing(false)
        setIsPhotograph(false)
        setIsWriting(false)
        setIsOld(false)
    }

    const handleSwitchDrawingClick = () => {
        setIsSection(false)
        setIsDrawing(true)
        setIsPhotograph(false)
        setIsWriting(false)
        setIsOld(false)
    }

    const handleSwitchPhotographClick = () => {
        setIsSection(false)
        setIsDrawing(false)
        setIsPhotograph(true)
        setIsWriting(false)
        setIsOld(false)
    }

    const handleSwitchWritingClick = () => {
        setIsSection(false)
        setIsDrawing(false)
        setIsPhotograph(false)
        setIsWriting(true)
        setIsOld(false)
    }
    const handleSwitchOldClick = () =>{
        setIsSection(false)
        setIsDrawing(false)
        setIsPhotograph(false)
        setIsWriting(false)
        setIsOld(true)

    }
return (
    <PostContext.Provider value={{
        isSection, isDrawing, isPhotograph, isWriting, isOld,handleSwitchOldClick,handleSwitchSectionClick, handleSwitchDrawingClick, handleSwitchPhotographClick, handleSwitchWritingClick
    }}>
        {children}
    </PostContext.Provider>
)
}

export const usePostContext = () => {
    return useContext(PostContext)
}