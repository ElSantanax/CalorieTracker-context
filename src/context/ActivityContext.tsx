import { createContext, ReactNode, useReducer, useMemo } from "react";
import { ActivityActions, ActivityState, activityReducer, initialState } from "../reducers/activity-reducer";
import { categories } from "../data/categories";
import { Activity } from "../types";

type activityProviderProps = {
    children: ReactNode
}

type ActivityContextProps = {
    state: ActivityState,
    dispatch: React.Dispatch<ActivityActions>,
    caloriesConsumed: number
    caloriesBurned: number,
    netCalories: number,
    categoryName: (category: Activity["category"]) => string[],
    isEmptyActivities: boolean
}

export const ActivityContext = createContext<ActivityContextProps>(null!)
export const ActivityProvider = ({ children }: activityProviderProps) => {
    const [state, dispatch] = useReducer(activityReducer, initialState)

    // Contadores
    const caloriesConsumed = useMemo(() => state.activities.reduce((total, activity) => activity.category === 1 ? total + activity.calories : total, 0), [state.activities])
    const caloriesBurned = useMemo(() => state.activities.reduce((total, activity) => activity.category === 2 ? total + activity.calories : total, 0), [state.activities])
    const netCalories = useMemo(() => caloriesConsumed - caloriesBurned, [state.activities])

    const categoryName = useMemo(() =>
        (category: Activity['category']) => categories.map(cat => cat.id === category ? cat.name : '')
        , [state.activities])

    const isEmptyActivities = useMemo(() => state.activities.length === 0, [state.activities])

    return (
        <ActivityContext.Provider value={{
            state,
            dispatch,
            caloriesConsumed,
            caloriesBurned,
            netCalories,
            categoryName,
            isEmptyActivities
        }}>
            {children}
        </ActivityContext.Provider>
    )
}