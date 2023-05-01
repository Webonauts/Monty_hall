export const probabilityCalculator = (probability) => {
    const { changedProbability, stayProbability} = probability;
    return {
        changedFailedProbability: changedProbability.failed / changedProbability.total,
        changedSuccessProbability: changedProbability.success / changedProbability.total,
        stayFailedProbability: stayProbability.failed / stayProbability.total,
        staySuccessProbability: stayProbability.success / stayProbability.total
    }
}