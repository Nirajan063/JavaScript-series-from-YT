import tkinter as tk
from tkinter import messagebox

def display_matrix():
    try:
        rows = int(row_entry.get())
        cols = int(col_entry.get())
        matrix = []

        for i in range(rows):
            row = []
            for j in range(cols):
                val = entries[i][j].get()
                row.append(float(val))
            matrix.append(row)

        output.delete('1.0', tk.END)
        output.insert(tk.END, "Matrix:\n")
        for row in matrix:
            output.insert(tk.END, f"{row}\n")

        # ✅ This part was incorrectly indented before
        transpose = list(zip(*matrix))
        output.insert(tk.END, "\nTranspose:\n")
        for row in transpose:
            output.insert(tk.END, f"{row}\n")

    except Exception as e:
        messagebox.showerror("Error", str(e))


def create_grid():
    global entries
    for widget in grid_frame.winfo_children():
        widget.destroy()

    try:
        rows = int(row_entry.get())
        cols = int(col_entry.get())
        entries = [[tk.Entry(grid_frame, width=5) for _ in range(cols)] for _ in range(rows)]

        for i in range(rows):
            for j in range(cols):
                entries[i][j].grid(row=i, column=j, padx=2, pady=2)

    except ValueError:
        messagebox.showerror("Invalid input", "Please enter valid integers for rows and columns.")


root = tk.Tk()
root.title("Matrix Visualizer")

tk.Label(root, text="Rows:").grid(row=0, column=0)
row_entry = tk.Entry(root)
row_entry.grid(row=0, column=1)

tk.Label(root, text="Columns:").grid(row=0, column=2)
col_entry = tk.Entry(root)
col_entry.grid(row=0, column=3)

tk.Button(root, text="Create Grid", command=create_grid).grid(row=0, column=4)
tk.Button(root, text="Display Matrix", command=display_matrix).grid(row=0, column=5)

grid_frame = tk.Frame(root)
grid_frame.grid(row=1, column=0, columnspan=6, pady=10)

output = tk.Text(root, height=10, width=50)
output.grid(row=2, column=0, columnspan=6)

root.mainloop()
