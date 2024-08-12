export class StudentManager {
    constructor() {
        this.students = [];
    }

    addStudent(student) {
        if (this.isDuplicateId(student.id)) {
            this.showNotification('Mã sinh viên đã tồn tại!', 'error');
            return;
        }
        this.students.push(student);
        this.sortStudentsByName();
        this.render();
        this.showNotification('Thêm sinh viên thành công!');
    }

    removeStudent(studentId) {
        this.students = this.students.filter(student => student.id !== studentId);
        this.render();
        this.showNotification('Xóa sinh viên thành công!');
    }

    updateStudent(studentId, updatedData) {
        const student = this.students.find(student => student.id === studentId);
        if (student) {
            student.updateInfo(updatedData);
            this.sortStudentsByName();
            this.render();
            this.showNotification('Cập nhật thông tin sinh viên thành công!');
        }
    }

    searchStudents(query) {
        const filteredStudents = this.students.filter(student =>
            student.name.toLowerCase().includes(query.toLowerCase()) ||
            student.id.toLowerCase().includes(query.toLowerCase()) ||
            student.studentClass.toLowerCase().includes(query.toLowerCase())
        );
        this.render(filteredStudents);
    }

    render(studentsToRender = this.students) {
        const tableBody = document.querySelector('#student-table tbody');
        tableBody.innerHTML = studentsToRender.map(student => student.toTableRow()).join('');
    }

    sortStudentsByName() {
        this.students.sort((a, b) => {
            // Lấy phần đầu của tên (họ) bằng cách lấy phần đầu tiên trong chuỗi tên đầy đủ
            const lastNameA = a.name.split(' ')[0].toLowerCase();
            const lastNameB = b.name.split(' ')[0].toLowerCase();
            
            if (lastNameA < lastNameB) return -1;
            if (lastNameA > lastNameB) return 1;
            return 0;
        });
    }

    isDuplicateId(id) {
        return this.students.some(student => student.id === id);
    }

    showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerText = message;
        document.body.appendChild(notification);
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
}
