import { Flex, Button, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

const Pagination = ({ page, totalPages, onPrevious, onNext }) => {
    return (
        <Flex mt={4} justify="space-between" width={'100%'} maxW={"800px"}>
            <Button onClick={onPrevious} disabled={page === 1}>Anterior</Button>
            <Text>Página {page} de {totalPages}</Text>
            <Button onClick={onNext} disabled={page === totalPages}>Próxima</Button>
        </Flex>
    );
};

Pagination.propTypes = {
    page: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    onPrevious: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired,
};

export default Pagination;