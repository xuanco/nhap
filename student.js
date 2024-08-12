export class Student {
    constructor(id, name, dob, studentClass, imageUrl) {
        this.id = id;
        this.name = name;
        this.dob = dob;
        this.studentClass = studentClass;
        this.imageUrl = imageUrl;
    }

    // Phương thức để cập nhật thông tin sinh viên
    updateInfo(updatedData) {
        this.name = updatedData.name || this.name;
        this.dob = updatedData.dob || this.dob;
        this.studentClass = updatedData.studentClass || this.studentClass;
        this.imageUrl = updatedData.imageUrl || this.imageUrl;
    }

    // Phương thức trả về mã HTML cho một hàng trong bảng
    toTableRow() {
        return `
            <tr data-id="${this.id}">
                <td><img src="${this.imageUrl}" alt="Ảnh Sinh Viên" width="50" height="50"></td>
                <td>${this.id}</td>
                <td>${this.name}</td>
                <td class="dob">${this.dob}</td>
                <td>${this.studentClass}</td>
                <td>
                    <button class="edit-btn">Chỉnh Sửa</button>
                    <button class="delete-btn">Xóa</button>
                </td>
            </tr>
        `;
    }
}
