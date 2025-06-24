export class GetAllOrdersUseCase {
    constructor(repo) {
        this.repo = repo
    }

    async execute() {
        return await this.repo.getAllOrders()
    }
}