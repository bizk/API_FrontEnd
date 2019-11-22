import React from 'react';
import AgregarReclamoModal from "./AgregarReclamoModal";
import ReclamoList from "./ReclamoList"


export default class ReclamoContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            reclamos: [],
            //Datos heredados
            usuarioActivo: {},
            edificiosDisponibles: [],
            unidadesDisponibles: [],
            isOpenAgregarReclamoModal: false
        }
        this.mostrarReclamoModal = this.mostrarReclamoModal.bind(this);
    }

    toggleAgregarReclamoModal() {
        this.setState(state => ({
            isOpenAgregarReclamoModal: !this.state.isOpenAgregarReclamoModal
        }));
    }
    render() {
        let form;
        let recl;
        if (this.state.isOpenAgregarReclamoModal) {
            form = (<div>
                <AgregarReclamoModal />
                <button type="button" class="btn btn-warning" onClick={this.toggleAgregarReclamoModal.bind(this)}>Cancelar</button>
            </div>)
        } else if (!this.state.isOpenAgregarReclamoModal) {
            form = (<div>
                <button type="button" class="btn btn-primary" onClick={this.toggleAgregarReclamoModal.bind(this)}>Agregar reclamo</button>
            </div>)
        };
        recl = (<ReclamoList></ReclamoList>)
        return (
            form + recl
            );
    };
}
