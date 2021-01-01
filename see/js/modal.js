export class ModalClass extends HTMLElement {
    constructor({modalHead, modalBody, modalNeg, modalPos}) {
        super();

        let modal = document.createElement('template');
        modal.innerHTML = `
            <style>:host { ... }</style> <!-- look ma, scoped styles -->
            <!-- Modal -->
            <div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">${modalHead}</h5>
                    <button type="button" class="btn-close" aria-label="Close" (click)="closeModal()"></button>
                    </div>
                    <div class="modal-body">
                        ${modalBody}
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" (click)="closeModal()">${modalNeg}</button>
                    <button type="button" class="btn btn-primary" (click)="closeModal()">${modalPos}</button>
                    </div>
                </div>
                </div>
            </div>
            <slot></slot>
        `;
    }
}