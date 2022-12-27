import { BrowserRouter as DefaultRouter, Routes, Route, Navigate } from "react-router-dom"
import { pages } from "../../resources/navigation/pages";

type ComponentType = React.FC;
export const Router: ComponentType = () => {
    return (
        <DefaultRouter>
            <Routes>
                {pages.map((page) => (
                    <Route key={page.path} path={page.path} />
                ))}
                <Route key="*" element={<Navigate to="/" />} />
            </Routes>
        </DefaultRouter>
    )
}